
# install.packages("rjson")
library(rjson)

n <- 24
indprod <- list(
  LABEL = as.character(format(seq(as.Date("2024/1/1"), by = "month", length.out = n), "%b %Y")),
  EUROPA = rnorm(n, 2, 3),
  USA = rnorm(n, 2, 3),
  CHINA = rnorm(n, 4, 8),
  INDUSTRIE = rnorm(n, 3, 5),
  SCHWELLE = rnorm(n, 1, 8)
)
indprod$WELT <- indprod$EUROPA + indprod$USA + indprod$CHINA + indprod$INDUSTRIE + indprod$SCHWELLE
indprod$FINANZKRISE <- indprod$WELT + rnorm(n, 0, 10)

json_string <- toJSON(indprod, indent = 0)
write(json_string, "data/Industrieproduktion.json")
