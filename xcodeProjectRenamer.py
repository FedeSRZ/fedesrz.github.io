import os

directory = './packages/app/ios'
find = "MyAwesomeProject"
replace = "MyComicApp"

# walk through the directory from bottom up
for root, dirs, filenames in os.walk(directory, topdown=False):
    dirs[:] = [d for d in dirs if d != '.git']  # skip .git dirs
    for filename in filenames:
        if filename != "replaceall.py":
            #search and replace within files themselves
            filepath = os.path.join(root, filename)
            with open(filepath) as f:
                    s = f.read()
                    s = s.replace(find, replace)
                    with open(filepath, "w") as f:
                        f.write(s)

        # rename files (ignoring file extensions)
        filename_split = os.path.splitext(filename)  # filename and extensionname (extension in [1])
        filename_zero = filename_split[0]
        extension = filename_split[1]
        if find in filename_zero and filename != "replaceall.py":
            path1 = os.path.join(root, filename)
            path2 = os.path.join(root, filename_zero.replace(find, replace) + extension)
            os.rename(path1, path2)
            print ("file: " + path1 + "  renamed to: " + path2)

# rename sub-directories as a separate walkthrough
for root, dirs, filenames in os.walk(directory, topdown=False):
    dirs[:] = [d for d in dirs if d != '.git']  # skip .git dirs
    for thedir in dirs:
        if find in thedir:
            path1 = os.path.join(root, thedir)
            path2 = os.path.join(root, thedir.replace(find, replace))
            os.rename(path1, path2)
            print ("dir: " + path1 + "  renamed to: " + path2)
