import { CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-west-1_4OaklmNuP",
    ClientId: "4iuuna9s4qnv3ajbc8k4p09gnt"
}

export default new CognitoUserPool(poolData);