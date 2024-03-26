// returns full string of product name from product/folder title
export function handleContentDirectoryLabel (title: string) {
  const { t } = useI18n()
  if (title === 'Get Started' || title === 'get-started') { // required to return correct fr translation for 'Get Started' accordian title
    return t('btn.getStarted')
  } else {
    const key = title.toUpperCase() as keyof typeof ProductNames
    return ProductNames[key] // return full string from enum, eg: content file 'bn' returns 'Business Number'
  }
}
