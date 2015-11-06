export default function(server) {
  let author = server.schema.author.create({ firstName: 'Link' });
  let post = server.schema.post.create({ title: 'Ipsum' });

  author.post = post;
  post.author = author;
}
