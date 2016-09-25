const enableHotReloading = () => {
  if (module.hot) {
    module.hot.accept()
  }
}

export default enableHotReloading
