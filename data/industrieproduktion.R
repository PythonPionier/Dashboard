
# install.packages("rjson")
library(rjson)
library(dplyr)

noise1 <- rnorm(100, sd=10)
noise2 <- rnorm(100)

indprod <- data.frame(
  LABEL = 1:100,
  USA = rnorm(100, 2),
  EUROPA = rnorm(100, 2),
  FINANZKRISE = 2 + noise1 + .1*lag(noise1, 1, default = 0),
  WELT = 2 + noise2 + .1*lag(noise2, 1, default = 0)
)



write.csv(indprod, file = "Industrieproduktion.csv")



indprod <- list(
  LABEL = 1:100,
  USA = rnorm(100, 2),
  EUROPA = rnorm(100, 2),
  FINANZKRISE = 2 + noise1 + .1*lag(noise1, 1, default = 0),
  WELT = 2 + noise2 + .1*lag(noise2, 1, default = 0)
)

json_string <- toJSON(indprod, indent = 0)
write(json_string, "Industrieproduktion.json")
write(json_string, "Industrieproduktion.txt")