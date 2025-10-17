"use client"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="container mx-auto my-8 px-4">
          <div className="max-w-7xl mx-auto">
                <hr className="my-8 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" />
                  <nav className="flex justify-between flex-col sm:grid-cols-4">
                    <div className="grid grid-cols-2 py-10 sm:grid-cols-4 ">
                      <div>
                        <h3 className="text-xl font-semibold">Features</h3>
                        <ul className="space-y-4">
                        <li className="mt-4">
                          <a href="/locations" 
                          className="text-primary-foreground/80 
                          hover:text-primary-foreground inline-block 
                          transition-colors duration-200">
                          Locations
                          </a>
                        </li>
                        <li className="mt-2">
                          <a href="/maps"
                          className="text-primary-foreground/80 
                          hover:text-primary-foreground inline-block 
                          transition-colors duration-200">
                          Maps
                          </a>
                        </li>
                        <li className="mt-2">
                          <a href="/warnings"
                          className="text-primary-foreground/80 
                          hover:text-primary-foreground inline-block 
                          transition-colors duration-200">
                          Warnings
                          </a>
                        </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">About Us</h3>
                        <ul className="space-y-2">
                          <li className="mt-2">
                            <a href="/faq"
                            className="text-primary-foreground/80 
                          hover:text-primary-foreground inline-block 
                          transition-colors duration-200">
                              FAQ
                            </a>
                          </li>
                          <li>
                            <a href="/contact">
                            Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Service</h3>
                        <ul className="space-y-2">
                          <li className="mt-2">
                            <a href="/terms">Terms of Service</a>
                          </li>
                          <li className="mt-2">
                            <a href="/policy">Privacy Policy</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <Image src="/logo.png" 
                        alt="logo footer"
                        width={150}
                        height={150}
                        />
                      </div>
                    </div>
                  </nav>
        
                  <hr className="my-8 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" />
                  <div className="mx-auto mt-4 flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <p className="font-medium">© 2025 YoanaStamenova - YoanaStamenova.com</p>
                  <div className="flex items-center gap-6">
                    <a href="https://facebook.com">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-facebook transition-transform 
                    hover:scale-110"
                        aria-hidden="true"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      aria-label="Twitter"
                      href="https://twitter.com"
                      className="text-primary-foreground/70 hover:text-primary-foreground/100 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter transition-transform 
                    hover:scale-110"
                        aria-hidden="true"
                      >
                        <path
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 
                    17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 
                    7-3.8 1.1 0 3-1.2 3-1.2z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      aria-label="LinkedIn"
                      href="https://linkedin.com"
                      className="text-primary-foreground/70 hover:text-primary-foreground/100 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin transition-transform hover:scale-110"
                        aria-hidden="true"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      aria-label="Instagram"
                      href="https://instagram.com"
                      className="text-primary-foreground/70 hover:text-primary-foreground/100 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram transition-transform hover:scale-110"
                        aria-hidden="true"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                  </div>
          </div>
        </footer>
    )
}