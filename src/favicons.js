const faviconsContext = require.context(
  '!!file-loader?name=img/favicons/[name].[ext]!.',
  true,
  /\.(svg|png|ico|xml)$/
);
faviconsContext.keys().forEach(faviconsContext);

export default faviconsContext