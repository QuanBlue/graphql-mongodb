import { authorModel } from "./author.model";

export async function getAllAuthors() {
    try {
        const authors = await authorModel.find().lean();
        return authors
    }
    catch (err) {
        console.log("[error]", err);
    }
}

export async function getAuthorById(id: String) {
    try {
        const author: Author = await authorModel.findById(id).lean();

        return author;
    }
    catch (err) {
        console.log("[Error]", err);
    }
}

export async function createAuthor(author) {
    try {
        await authorModel.create({
            name: author.name,
            age: author.age
        });
    }
    catch (err) {
        console.log("[Error]", err);
    }
}

export async function updateAuthor(a) {
    try {
        await authorModel.findByIdAndUpdate(
            {
                _id: a.id
            },
            {
                name: a.name,
            });
    }
    catch (err) {
        console.log("[Error]", err);
    }
}


export async function deleteAuthor(id: String) {
    try {
        await authorModel.findByIdAndDelete({ _id: id });
    }
    catch (err) {
        console.log("[Error]", err);
    }
}


