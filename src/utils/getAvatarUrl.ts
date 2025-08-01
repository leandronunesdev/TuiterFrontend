export const getAvatarUrl = (userIdOrUsername?: string) => {
  let hash = 0;
  for (let i = 0; i < (userIdOrUsername || "").length; i++) {
    hash = (userIdOrUsername || "").charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash % 100);
  return `https://randomuser.me/api/portraits/men/${index}.jpg`;
};
