export default function(server) {
  let author = server.schema.author.create({ firstName: 'Link' });
  let post = author.createPost({ title: 'Lorem' });
  post.createComment({ text: 'pwned' });
  author.createPost({ title: 'Ipsum' });
  server.schema.author.create({ firstName: 'Zelda' });
}
