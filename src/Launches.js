import { useQuery, gql } from '@apollo/client';

const LAUNCHES_RATES = gql`
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
`;

export function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.launches.map(
        ({ rocket, details, launch_date_local, links }) => (
          <div
            key={launch_date_local}
          >
            <p style={{ margin: '20px' }}>
              - {rocket.rocket_name}
            </p>
            <p>{details}</p>
            <p>{links.video_link}</p>
          </div>
        )
      )}
    </div>
  )   
}