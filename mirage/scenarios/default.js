export default function(server) {
  let author = server.schema.author.create({ firstName: 'Link' });
  author.createPost({ title: 'Lorem' });

  let post = server.schema.post.create({ title: 'Ipsum' });
  post.createAuthor({ firstName: 'Zelda' });
}
