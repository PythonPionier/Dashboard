
# install.packages("rjson")
library(rjson)

n <- 24
indprod <- list(
  LABEL = as.character(seq(as.Date("2024/1/1"), by = "month", length.out = n)),
  EUROPA = rnorm(n, 2, 5),
  USA = rnorm(n, 2, 5),
  CHINA = rnorm(n, 2, 5),
  INDUSTRIE = rnorm(n, 2, 5),
  SCHWELLE = rnorm(n, 2, 5),
  FINANZKRISE = cumsum(rnorm(n, 0, 10)),
  WELT = cumsum(rnorm(n, 0, 10))
)

json_string <- toJSON(indprod, indent = 0)
write(json_string, "data/Industrieproduktion.json")


