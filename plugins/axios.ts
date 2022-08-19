export default function ({ $axios, redirect }: any, inject: any) {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, application/json, */*',
        'Content-Type': 'application/json',
      },
    },
  })

  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://willsetlater'
      : 'http://localhost:8000/api'

  api.setBaseURL(baseUrl)

  $axios.onRequest((config: any) => {
    console.log(`Making request to ${config.url}`)
  })

  $axios.onError((err: Error) => {
    console.log(err)
    redirect('/')
  })

  // inject to context as $api
  inject('api', api)
}
