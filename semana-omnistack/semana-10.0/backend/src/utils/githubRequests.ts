import api from "./commons";
import Constants from "./Constants";
import { IGithubUser } from "../interfaces/IGithubUser";

export const getUserInfo = async (username: string): Promise<IGithubUser> => {
    const request = api(Constants.GITHUB_BASE_URL);

    try {
        const githubData = await request.get(`/${username}`);

        const { name, login, avatar_url, bio } = githubData.data;

        const userData: IGithubUser = {
            name: name ? name : login,
            bio,
            avatar_url
        }
        return userData;
    } catch (err) {
        console.log(err);
        return err.response;
    }
}
