module.exports = {
  apps : [
    {
      name: "Frontend",
      cwd: "./front",
      script: "npm start",
      env: {
        PORT: 18500,
        domain:{
          API: "gamingnetworkapi.ghosty.dev"
        }
      }
    },
    {
      name: "Backend",
      cwd: "./back",
      env: {
        PORT: 18501
      }
    }
  ]
};
