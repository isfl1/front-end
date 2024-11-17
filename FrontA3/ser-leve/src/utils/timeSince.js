export function timeSince(currentTime, time) {
    const seconds = Math.floor((currentTime - time) / 1000);
  
    let interval = Math.floor(seconds / 3600);
  
    if (interval >= 1) {
      return `${interval} hours ago`;
    }
  
    interval = Math.floor(seconds / 60);
  
    if (interval >= 1) {
      return `${interval} minutes ago`;
    }
  
    return `${seconds} seconds ago`;
  }