export const categorizeMedia = (mediaType, title) => {
  const titleLower = title.toLowerCase();
  
  if (mediaType === 'video') return 'video';
         if (titleLower.includes('galaxy')) return 'galaxy';
  if (titleLower.includes('planet') || titleLower.includes('mars') || 
      titleLower.includes('jupiter') || titleLower.includes('saturn')) return 'planet';
       if (titleLower.includes('moon')) return 'moon';
       if (titleLower.includes('star') || titleLower.includes('sun')) return 'star';
  if (titleLower.includes('nebula')) return 'nebula';
  
  return 'other';
}; 