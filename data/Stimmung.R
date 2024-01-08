
library(rjson)

n <- 24
stimmung <- list(
  LABEL = as.character(format(seq(as.Date("2024/1/1"), by = "month", length.out = n), "%b %Y")),
  INDUSTRIE = cumsum(rnorm(n, 0, 10)),
  BAUHAUPTGEWERBE = cumsum(rnorm(n, 0, 10)),
  GROSSHANDEL = cumsum(rnorm(n, 0, 10)),
  EINZELHANDEL = cumsum(rnorm(n, 0, 10))
)

json_string <- toJSON(stimmung, indent = 0)
write(json_string, "data/Stimmung.json")
