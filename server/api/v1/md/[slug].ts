import { POST_LIST } from './data'
export default defineEventHandler((event) => {
  const slug = event.context.params?.slug
  const res = POST_LIST.find(item => item.slug === slug)
  return res
})
