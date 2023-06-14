export const fade = {
    hidden: {
        opacity: 0,
        x: -80
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            duration: 0.2,
        }
    }
}