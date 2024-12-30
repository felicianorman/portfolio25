export async function fetchRepos() {
    try {
        const response = await fetch("https://api.github.com/users/felicianorman/repos");
        const data = await response.json();
        return data;
    } catch (error) { 
        console.error(error);
        return [];
    }
}