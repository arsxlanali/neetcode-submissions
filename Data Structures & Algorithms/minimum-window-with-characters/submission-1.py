from collections import Counter

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not t or len(t) > len(s):
            return ""

        count_t = Counter(t)
        window = {}
        have, need = 0, len(count_t)

        best = (float("inf"), 0, 0)  # (length, l, r)
        l = 0
        for r, c in enumerate(s):
            window[c] = window.get(c, 0) + 1
            if c in count_t and window[c] == count_t[c]:
                have += 1

            while have == need:
                if r - l + 1 < best[0]:
                    best = (r - l + 1, l, r)
                left_char = s[l]
                window[left_char] -= 1
                if left_char in count_t and window[left_char] < count_t[left_char]:
                    have -= 1
                l += 1

        length, l, r = best
        return s[l:r + 1] if length != float("inf") else ""