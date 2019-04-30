module.exports = {
    pages: {
      index: {
        entry: 'src/main/javascript/main.ts',
        template: 'public/index.html',
        filename: 'index.html',
        title: 'Index Page',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
    }
}