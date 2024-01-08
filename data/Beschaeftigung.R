
library(rjson)
library(dplyr)

n <- 15
besch <- data.frame(
  VALS = rnorm(n, 1000, 1500)
) %>%
  arrange(desc(VALS)) %>%
  mutate(
    LABEL = LETTERS[1:n],
    POS = if_else(VALS >= 0, VALS, NA),
    NEG = if_else(VALS < 0, VALS, NA)
  )

json_string <- toJSON(as.list(besch), indent = 0)
write(json_string, "data/Beschaeftigung.json")
