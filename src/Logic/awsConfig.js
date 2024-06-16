// awsConfig.js
import { config } from "dotenv";
import { 
  ConnectContactLensClient, 
  ListRealtimeContactAnalysisSegmentsCommand 
} from "@aws-sdk/client-connect-contact-lens";

config();

export const client = new ConnectContactLensClient({ region: "us-east-1" });
