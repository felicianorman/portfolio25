export interface Repository {
    id: number;
    name: string;
    html_url: string;
    description?: string;
    topics: string[];
}


export async function fetchRepos(): Promise<Repository[]> {
    try {
        const response = await fetch("https://api.github.com/users/felicianorman/repos");
        const data = await response.json();
        return data;
    } catch (error) { 
        console.error(error);
        return [];
    }
}