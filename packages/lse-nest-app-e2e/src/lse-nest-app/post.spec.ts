import axios from 'axios';
describe('GET /api/posts', () => {
  it('should return all the posts', async () => {
    const res = await axios.get(`/api/posts`);
    // res is any which neds to be fixed
    expect(res.status).toBe(200);
    expect(res.data).toEqual([]);
  });

  it('should return a single post', async () => {
    const res = await axios.get(`/api/posts/1`);
    // res is any which neds to be fixed
    expect(res.status).toBe(200);
    expect(res.data.id).toBe("1");
  });
});
