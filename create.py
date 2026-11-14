import os

# Loop from 1 to 4
for i in range(1, 7):
    filename = f"js3-teht{i}.html"
    
    # 'w' mode creates an empty file; 'pass' leaves it blank
    with open(filename, "w") as f:
        pass
        
    print(f"Created empty file: {filename}")
