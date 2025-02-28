import { AppType, GET } from "../../api/[[...route]]/route";

class UserClient {
  async getUser() {
    const res = await GET(new Request("/api/user"));
    return res.json();
  }
}

const userClient = new UserClient();
export default userClient;
