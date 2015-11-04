export default function() {
  this.get('/authors');
  this.get('/authors/:id');

  this.get('/posts');
  this.get('/posts/:id');

  this.get('/comments');
  this.get('/comments/:id');
}
