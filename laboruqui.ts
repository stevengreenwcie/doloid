class ResourceHolder<T> {
    private resources: T;

    constructor(initialResources: T) {
        this.resources = initialResources;
    }

    setResources(newResources: T): void {
        this.resources = newResources;
    }

    getResources(): T {
        return this.resources;
    }
}

// Usage
const holder = new ResourceHolder<string>('Initial Resource');
console.log(holder.getResources()); // Output: Initial Resource
holder.setResources('Updated Resource');
console.log(holder.getResources()); // Output: Updated Resource
