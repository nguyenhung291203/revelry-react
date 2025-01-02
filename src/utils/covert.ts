export const objectToFormData = (obj: any) => {
  const formData = new FormData()
  for (const key in obj) {
    if (obj[key] instanceof File) {
      formData.append(key, obj[key]) // Thêm file
    } else {
      formData.append(key, obj[key]) // Thêm các thuộc tính khác
    }
  }
  return formData
}
