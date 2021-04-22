import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

export const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache()
  });
  
  client
    .query({
      query: gql`
        query GetLaunches {
            launches(limit: 5) {
                launch_date_local
                launch_success
                details
                links {
                  video_link
                }
                rocket {
                  rocket_name
                }
              }
        }
      `
    })
    .then(result => console.log(result));