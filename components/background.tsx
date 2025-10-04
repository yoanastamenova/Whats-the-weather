export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-500" />

      {/* Blurred flowing shapes */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/3 w-[700px] h-[700px] bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
    </div>
  );
}
