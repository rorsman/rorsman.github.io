import { describe, expect, it } from "vitest";
import { isRepo } from "./github";

describe("isRepo", () => {
    it("accepts the fields used by the projects page", () => {
        expect(
            isRepo({
                id: 1,
                name: "example",
                html_url: "https://github.com/example/example",
                description: null,
            }),
        ).toBe(true);
    });

    it("rejects incomplete API data", () => {
        expect(isRepo({ id: 1, name: "example" })).toBe(false);
    });
});
