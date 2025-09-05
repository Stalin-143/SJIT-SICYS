"use client"

export default function BackgroundLogo() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        backgroundImage: 'url("/logo.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right -80px top -60px",
        backgroundSize: "min(80vmin, 520px)",
        opacity: 0.03, // More transparent (was 0.08)
        filter: "saturate(0.98) contrast(1.05)",
        transform:
          "translate3d(calc(var(--mouse-x, 0px) * 0.025), calc((var(--mouse-y, 0px) * 0.018) + (var(--scroll, 0px) * -0.03)), 0)",
        transition: "transform 160ms ease-out",
      }}
    />
  )
}
