'use client'
import React from "react"
import Particles from "react-particles"
import { Engine } from "tsparticles-engine"
import { loadLinksPreset } from "tsparticles-preset-links"


class ParticlesContainer extends React.PureComponent {
    async customInit(engine: Engine): Promise<void> {
        await loadLinksPreset(engine)
    }

    render() {
        const options = {
            "background": {
                "color": {
                    "value": "#1e1f26",
                },
            },
            "fpsLimit": 120,
            particles: {
                color: {
                    value: "#f2f2f2",
                },
                links: {
                    color: "#f2f2f2",
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 50,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
        }

        return (
            <Particles init={this.customInit} />

        )
    }

}

export { ParticlesContainer }