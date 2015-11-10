export default function(server) {
  let author;

  author = server.schema.author.create({ firstName: 'Link' });
  author.createPost({ title: 'Lorem' });
  author.createPost({ title: 'Ipsum' });

  author = server.schema.author.create({ firstName: 'Zelda' });
  author.createPost({ title: 'Quid' });
  author.createPost({ title: 'Novi' });
}
