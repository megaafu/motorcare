const formatTextWithLineBreaks = (text: string): string => {
  return text.replace(/\n/g, '<br/>')
}

export default formatTextWithLineBreaks


