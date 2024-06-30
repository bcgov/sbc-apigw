export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event) // get config
  const path = event.path.split('?')[1] // intercept request url and split at '?', this returns all query params set from <bcros-search>
  setResponseHeaders(event, {
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
  try {
    // must currently include full url up to '?', all query parameters handled by web component
    return await $fetch(
      `http://bcregistry-sandbox.apigee.net/registry-search/api/v1/businesses/search/facets?${path}`,
      // apply required headers from config
      {
        headers: {
          Accept: 'application/json',
          'x-apikey': config.xApiKey,
          'account-id': config.accountId
        }
      }
    )
  } catch (error) {
    throw createError({
      statusCode: 400,
      message: 'Error Fetching Businesses'
    })
  }
})
