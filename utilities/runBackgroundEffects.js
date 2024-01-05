import React from "react"

export default function runBackgroundEffects(
	torchEquipped,
	woodOnFire,
	setWoodKindling,
	setWoodOnFire,
	setCursorPosition
) {
	React.useEffect(() => {
		function updateMousePosition(event) {
			setCursorPosition({ x: event.clientX, y: event.clientY })
		}
		window.addEventListener("mousemove", updateMousePosition)

		return () => window.removeEventListener("mousemove", updateMousePosition)
	}, [])

	React.useEffect(() => {
		if (!torchEquipped && !woodOnFire) {
			setWoodKindling(false)
			setWoodOnFire(false)
		}
	}, [torchEquipped])
}
