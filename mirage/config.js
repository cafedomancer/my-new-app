export default function() {
  this.get('/authors');
  this.post('/authors');
  this.get('/authors/:id');

  this.get('/posts');
  this.post('/posts');
  this.get('/posts/:id');
}
