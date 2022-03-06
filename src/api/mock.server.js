import { createServer, Model, RestSerializer } from "miragejs";
import faker from "@faker-js/faker";

const setUpMockServer = ({ environment = "production" }) => {
  return createServer({
    environment,
    serializers: {
      application: RestSerializer,
    },
    models: {
      address: Model,
    },

    routes() {
      this.namespace = "api";
      this.timing = 2000;
      this.resource("addresses");

      // Passthrough
      this.pretender.get(
        "https://unpkg.com/ionicons@5.5.2/dist/ionicons/svg/create-outline.svg",
        this.pretender.passthrough
      );
      this.pretender.get(
        "https://unpkg.com/ionicons@5.5.2/dist/ionicons/svg/trash-outline.svg",
        this.pretender.passthrough
      );
    },

    seeds(server) {
      server.create("address", {
        id: faker.datatype.uuid(),
        name: "Jowel Tisso",
        mobile: "1234567890",
        address: "Ganesguri, near dispur college",
        pin: "781028",
        city: "Guwahati",
        state: "Assam",
        landmark: "Dispur college",
      });
    },
  });
};

export default setUpMockServer;
