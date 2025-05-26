import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {
        // Check for server-side rendering
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            let check;
            if (userPref) {
                check = userPref === "dark" ? "dark" : "light";
            } else {
                check = mediaQuery.matches ? "dark" : "light";
            }
            
            setMode(check);
            if (check === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        };

        // Initial check
        handleChange();

        // Listen for system preference changes
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        if (mode) {
            window.localStorage.setItem("theme", mode);
            if (mode === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitcher;