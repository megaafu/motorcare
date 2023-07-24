interface IAcordingItem {
  id: number
  title: string
  description: string
}

interface IAcordings {
  acordings: IAcordingItem[]
}

const Mission: IAcordingItem = {
  id: 1,
  title: 'mission',
  description: 'mission_description'
}

const Vision: IAcordingItem = {
  id: 2,
  title: 'vision',
  description: 'vision_description',
}

const Values: IAcordingItem = {
  id: 3,
  title: 'values',
  description: 'values_description',
}

export const AllAcording: IAcordings = {
  acordings: [Values, Mission, Vision],
}
