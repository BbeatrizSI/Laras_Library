import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: [
				"favicon.ico",
				"apple-touch-icon.png",
				"mask-icon.svg",
			],
			manifest: {
				name: "Lara's Library",
				short_name: "LaraLib",
				description: "Mi biblioteca personal de lecturas sáficas",
				theme_color: "#8b5cf6", // Color de la barra de estado
				icons: [
					{
						src: "pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		}),
	],
	base: "/Laras_Library/",
});
