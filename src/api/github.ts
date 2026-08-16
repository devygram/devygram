// GitHub user configuration for DevyGram
const GITHUB_USERNAME = 'devygram';
const REPO_OWNER = 'devygram';
const REPO_NAME = 'devygram';

export async function fetchGitHubStars(): Promise<number> {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return 0;
    const data = await res.json();
    return data.stargazers_count ?? 0;
  } catch {
    return 0;
  }
}

export async function fetchRepoStars(): Promise<number> {
  return fetchGitHubStars();
}

export async function fetchGitHubContributions(): Promise<any[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=30`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}
