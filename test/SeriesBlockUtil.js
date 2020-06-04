export default function mockSeries(n) {
  if (!n) n = 3
  const template = {
    title: 'Series Title',
    post: [],
  }
  for (let i = 0; i < n; i++) {
    template.post.push({
      title: `Series #${i + 1}`,
      meta: {
        id: i.toString(),
        slug: `series${i + 1}`,
        entryDate: `2020-01-${i + 1}`,
      },
    })
  }
  return template
}