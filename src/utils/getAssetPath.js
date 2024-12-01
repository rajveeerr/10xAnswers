export const getAssetPath = (imageName) => {
    if (typeof window !== 'undefined') {
      const packagePath = '/node_modules/10xanswers/dist/';
      return `${packagePath}${imageName}`;
    }
    return '';
}