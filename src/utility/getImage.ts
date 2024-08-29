export const getImageUrl = (position: string = "inner", name: string) => {
    if (position == "outer") {
        return new URL(`../assets/${name}`, import.meta.url).href
    } else {
        return new URL(`./assets/${name}`, import.meta.url).href
    }
}