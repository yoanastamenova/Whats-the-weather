'use client'

import React, { useEffect, useState } from 'react'

interface WeatherData {
  city: string
  temperature: number
  humidity?: number
  pressure?: number
  windSpeed?: number
  condition: string
  updatedAt: string
}

interface Warning {
  city: string
  severity: 'yellow' | 'orange' | 'red'
  type: string
  message: string
  value?: number
  updatedAt: string
}

export default function WarningsPage() {
  const [warnings, setWarnings] = useState<Warning[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchWarnings() {
      try {
        setLoading(true)
        const allWarnings: Warning[] = []

        // Spanish cities
        const spanishCities = ['valencia', 'madrid', 'barcelona']
        for (const city of spanishCities) {
          try {
            const response = await fetch(`/api/aemet?${city}`)
            if (response.ok) {
              const data: WeatherData = await response.json()
              const cityWarnings = analyzeWeatherData(data, 'Spain')
              allWarnings.push(...cityWarnings)
            }
          } catch (err) {
            console.error(`Failed to fetch data for ${city}:`, err)
          }
        }

        // German cities
        const germanCities = ['berlin', 'munich', 'hamburg']
        for (const city of germanCities) {
          try {
            const response = await fetch(`/api/germany?${city}`)
            if (response.ok) {
              const data: WeatherData = await response.json()
              const cityWarnings = analyzeWeatherData(data, 'Germany')
              allWarnings.push(...cityWarnings)
            }
          } catch (err) {
            console.error(`Failed to fetch data for ${city}:`, err)
          }
        }

        setWarnings(allWarnings)
        setError(null)
      } catch (err) {
        setError('Failed to fetch weather warnings')
        console.error('Error fetching warnings:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchWarnings()
    // Refresh every 5 minutes
    const interval = setInterval(fetchWarnings, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  function analyzeWeatherData(data: WeatherData, country: string): Warning[] {
    const warnings: Warning[] = []

    // Temperature warnings
    if (data.temperature >= 35) {
      warnings.push({
        city: data.city,
        severity: data.temperature >= 40 ? 'red' : 'orange',
        type: 'Extreme Heat',
        message: `Very high temperature detected`,
        value: data.temperature,
        updatedAt: data.updatedAt,
      })
    } else if (data.temperature <= 0) {
      warnings.push({
        city: data.city,
        severity: data.temperature <= -10 ? 'red' : 'yellow',
        type: 'Freezing Temperature',
        message: `Freezing conditions detected`,
        value: data.temperature,
        updatedAt: data.updatedAt,
      })
    }

    // Wind warnings
    if (data.windSpeed !== undefined && data.windSpeed >= 50) {
      warnings.push({
        city: data.city,
        severity: data.windSpeed >= 75 ? 'red' : data.windSpeed >= 60 ? 'orange' : 'yellow',
        type: 'Strong Winds',
        message: `High wind speeds detected`,
        value: data.windSpeed,
        updatedAt: data.updatedAt,
      })
    }

    // Severe weather condition warnings
    const severeConditions = ['Heavy rain', 'Heavy snow', 'Thunderstorm']
    if (severeConditions.some(cond => data.condition.toLowerCase().includes(cond.toLowerCase()))) {
      warnings.push({
        city: data.city,
        severity: 'orange',
        type: data.condition,
        message: `Severe weather conditions: ${data.condition}`,
        updatedAt: data.updatedAt,
      })
    }

    // Humidity warnings (potential fog/poor visibility)
    if (data.humidity !== undefined && data.humidity >= 95) {
      warnings.push({
        city: data.city,
        severity: 'yellow',
        type: 'High Humidity / Fog',
        message: `Very high humidity may cause fog and poor visibility`,
        value: data.humidity,
        updatedAt: data.updatedAt,
      })
    }

    return warnings
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'red':
        return 'bg-red-500 border-red-600'
      case 'orange':
        return 'bg-orange-500 border-orange-600'
      case 'yellow':
        return 'bg-yellow-400 border-yellow-500'
      default:
        return 'bg-gray-500 border-gray-600'
    }
  }

  const getSeverityTextColor = (severity: string) => {
    return severity === 'yellow' ? 'text-gray-900' : 'text-white'
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 mt-12 relative z-10 min-h-[60vh]">
        <h2 className="text-4xl md:text-5xl font-semibold text-black text-center mb-8 drop-shadow-lg">
          Weather Warnings
        </h2>
        <p className="text-center text-lg">Loading weather warnings...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 mt-12 relative z-10 min-h-[60vh]">
        <h2 className="text-4xl md:text-5xl font-semibold text-black text-center mb-8 drop-shadow-lg">
          Weather Warnings
        </h2>
        <p className="text-center text-lg text-red-600">{error}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 mt-12 relative z-10 min-h-[60vh]">
      <h2 className="text-4xl md:text-5xl font-semibold text-black text-center mb-8 drop-shadow-lg">
        Weather Warnings
      </h2>

      {warnings.length === 0 ? (
        <div className="text-center">
          <div className="inline-block bg-green-100 border-2 border-green-500 rounded-lg px-8 py-6">
            <p className="text-xl font-semibold text-green-800">
              No active weather warnings
            </p>
            <p className="text-green-700 mt-2">
              All monitored cities have normal weather conditions
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {warnings.map((warning, index) => (
            <div
              key={index}
              className={`${getSeverityColor(warning.severity)} ${getSeverityTextColor(warning.severity)} border-2 rounded-lg p-6 shadow-lg`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold">{warning.city}</h3>
                <span className="text-xs uppercase font-semibold px-2 py-1 bg-black bg-opacity-20 rounded">
                  {warning.severity}
                </span>
              </div>

              <div className="mb-2">
                <p className="text-lg font-semibold">{warning.type}</p>
                <p className="text-sm mt-1">{warning.message}</p>
              </div>

              {warning.value !== undefined && (
                <p className="text-3xl font-bold mt-3">
                  {warning.value}
                  {warning.type.includes('Temperature') ? '°C' : ''}
                  {warning.type.includes('Wind') ? ' km/h' : ''}
                  {warning.type.includes('Humidity') ? '%' : ''}
                </p>
              )}

              <p className="text-xs mt-4 opacity-75">
                Updated: {new Date(warning.updatedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 text-center text-sm text-gray-600">
        <p>Monitoring: Valencia, Madrid, Barcelona (Spain) • Berlin, Munich, Hamburg (Germany)</p>
        <p className="mt-1">Auto-refreshes every 5 minutes</p>
      </div>
    </div>
  )
}