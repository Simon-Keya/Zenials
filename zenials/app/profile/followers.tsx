import { useEffect, useState } from 'react';
import FollowButton from '../components/FollowButton';
import { fetchFollowers, fetchFollowing, followUser, unfollowUser } from '../api/followers';
import { useRouter } from 'next/router';

interface Follower {
  id: string;
  name: string;
  bio: string;
}

export default function Followers() {
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [following, setFollowing] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const userId = typeof router.query.id === 'string' ? router.query.id : undefined;

  useEffect(() => {
    if (!userId) return;  // Ensure userId is valid
    setIsLoading(true);
    Promise.all([fetchFollowers(userId), fetchFollowing(userId)])
      .then(([followersResponse, followingResponse]) => {
        // Ensure you extract the data from the AxiosResponse
        setFollowers(followersResponse.data); // Extract data from AxiosResponse
        setFollowing(followingResponse.data); // Extract data from AxiosResponse
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [userId]);

  const handleFollow = (targetId: string) => {
    followUser(targetId).then(() => {
      fetchFollowing(userId as string).then((response) => {
        setFollowing(response.data); // Extract data from AxiosResponse
      });
    });
  };

  const handleUnfollow = (targetId: string) => {
    unfollowUser(targetId).then(() => {
      fetchFollowing(userId as string).then((response) => {
        setFollowing(response.data); // Extract data from AxiosResponse
      });
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold">Followers</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <section>
          <h2 className="text-2xl mt-4">Followers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {followers.map((follower) => (
              <div key={follower.id} className="p-4 border rounded-lg shadow-md">
                <h3 className="font-medium">{follower.name}</h3>
                <p className="text-sm text-gray-500">{follower.bio}</p>
                <FollowButton
                  userId={follower.id} // Pass userId to FollowButton
                  isFollowing={following.includes(follower.id)}
                  onFollow={() => handleFollow(follower.id)}
                  onUnfollow={() => handleUnfollow(follower.id)}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
